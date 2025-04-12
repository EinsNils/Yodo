package com.yodo.backend.request;

import lombok.Data;

@Data
public class AuthRequest {

  private String firstName;

  private String lastName;

  private String email;

  private String password;
}
