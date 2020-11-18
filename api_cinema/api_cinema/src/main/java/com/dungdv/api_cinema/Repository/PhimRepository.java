package com.dungdv.api_cinema.Repository;

import com.dungdv.api_cinema.Model.LichChieu;
import com.dungdv.api_cinema.Model.Phim;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PhimRepository extends JpaRepository<Phim, Long> {
    List<Phim> findByStatus(Integer status);
    List<Phim> findByStatusAndLichChieusNgayChieu(Integer status, Date ngayChieu);

}
