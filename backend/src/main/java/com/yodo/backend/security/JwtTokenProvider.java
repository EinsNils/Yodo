package com.yodo.backend.security;

import com.yodo.backend.model.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.Jwts;
import java.sql.Date;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class JwtTokenProvider {

  @Value("{app.jwtSecret}")
  private String jwtSecret;

  public String generateToken(String userEmail) {
    Instant now = Instant.now();
    Instant expiryDate = now.plus(1, ChronoUnit.HOURS);

    return Jwts.builder()
        .setSubject(userEmail)
        .setIssuedAt(Date.from(now))
        .setExpiration(java.util.Date.from(expiryDate))
        .signWith(io.jsonwebtoken.SignatureAlgorithm.HS512, jwtSecret)
        .compact();
  }

  public String generateToken(Authentication authentication) {
    User user = (User) authentication.getPrincipal();
    return generateToken(user.getEmail());
  }

  public String getUserMailFromToken(String token) {
    Claims claims = Jwts.parser().setSigningKey(jwtSecret).build().parseClaimsJws(token).getBody();

    return claims.getSubject();
  }

  public boolean validateToken(String token) {
    try {
      Jwts.parser().setSigningKey(jwtSecret).build().parseClaimsJws(token);
      return true;
    } catch (SignatureException ex) {
      log.error("Invalid JWT signature");
    } catch (MalformedJwtException ex) {
      log.error("Invalid JWT token");
    } catch (ExpiredJwtException ex) {
      log.error("Expired JWT token");
    } catch (UnsupportedJwtException ex) {
      log.error("Unsupported JWT token");
    } catch (IllegalArgumentException ex) {
      log.error("JWT claims string is empty.");
    }

    return false;
  }
}
