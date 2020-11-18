package com.dungdv.api_cinema.Repository;

import com.dungdv.api_cinema.Model.DanhGia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DanhGiaRepository extends JpaRepository<DanhGia, Long> {
    List<DanhGia> findByPhimId(Long idPhim);

    DanhGia findByPhimIdAndUserId(Long idPhim, Long idUser);
}
