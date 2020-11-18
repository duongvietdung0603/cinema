package com.dungdv.api_cinema.Repository;

import com.dungdv.api_cinema.Model.NhanXet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NhanXetRepository extends JpaRepository<NhanXet, Long> {
    List<NhanXet> findByPhimIdOrderByIdDesc (Long id);
}
