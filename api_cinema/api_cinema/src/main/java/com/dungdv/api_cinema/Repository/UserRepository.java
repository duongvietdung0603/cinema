package com.dungdv.api_cinema.Repository;

import com.dungdv.api_cinema.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
