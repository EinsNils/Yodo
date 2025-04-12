package com.yodo.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import javax.crypto.SecretKey;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class JwtTokenProvider {

  @Value("${app.jwtSecret}")
  private String jwtSecret;

  public String generateToken(String userEmail) {
    Instant now = Instant.now();
    Instant expiryDate = now.plus(1, ChronoUnit.HOURS);
    SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));

    return Jwts.builder()
        .setSubject(userEmail)
        .setIssuedAt(Date.from(now))
        .setExpiration(Date.from(expiryDate))
        .signWith(key)
        .compact();
  }

  public String generateToken(Authentication authentication) {
    return generateToken(authentication.getName());
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
