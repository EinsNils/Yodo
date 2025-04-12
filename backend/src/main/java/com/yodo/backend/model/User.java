package com.yodo.backend.model;

import jakarta.persistence.*;
import java.util.UUID;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID uuid;

  private String firstName;

  private String lastName;

  @Column(unique = true)
  private String email;

  private String password;
}
