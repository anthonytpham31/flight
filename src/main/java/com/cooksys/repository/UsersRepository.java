package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
	Users findByCredentialsUsername(String username);
    Users findByCredentialsUsernameAndIsActiveTrue(String username);
    Users findByCredentialsUsernameAndCredentialsPassword(String username, String password);
    Users findByCredentialsUsernameAndCredentialsPasswordAndIsActiveTrue(String username, String password);
}
