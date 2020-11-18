package com.dungdv.api_cinema.Repository;

import com.dungdv.api_cinema.Model.LichChieu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface LichChieuRepository extends JpaRepository<LichChieu, Long> {
    List<LichChieu> findByPhimId(Long id);
     List<LichChieu> findByPhimIdAndNgayChieu(Long id, java.util.Date data);
}
