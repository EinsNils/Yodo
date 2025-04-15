package com.yodo.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.UUID;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  @JsonIgnore
  private UUID uuid;

  private String firstName;

  private String lastName;

  @Column(unique = true)
  private String email;

  @JsonIgnore private String password;

  @JsonIgnore private boolean verified;
}
