package com.yodo.backend.controller;

import com.yodo.backend.Repository.UserRepository;
import com.yodo.backend.model.User;
import com.yodo.backend.model.request.AuthRequest;
import com.yodo.backend.security.JwtTokenProvider;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;

  public AuthController(
      UserRepository userRepository,
      PasswordEncoder passwordEncoder,
      AuthenticationManager authenticationManager,
      JwtTokenProvider jwtTokenProvider) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @PostMapping(value = "/register")
  public ResponseEntity<User> register(@RequestBody AuthRequest authRequest) {
    Optional<User> userOptional = userRepository.findUserByEmail(authRequest.getEmail());

    if (userOptional.isPresent()) {
      return ResponseEntity.badRequest().build();
    }

    User user = new User();
    user.setFirstName(authRequest.getFirstName());
    user.setLastName(authRequest.getLastName());
    user.setEmail(authRequest.getEmail());
    user.setPassword(passwordEncoder.encode(authRequest.getPassword()));

    User created = userRepository.save(user);

    return ResponseEntity.ok(created);
  }

  @PostMapping(value = "/login")
  public ResponseEntity<String> login(@RequestBody AuthRequest authRequest) {
    Authentication authentication =
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                authRequest.getEmail(), authRequest.getPassword()));

    return ResponseEntity.ok(jwtTokenProvider.generateToken(authentication));
  }
}
