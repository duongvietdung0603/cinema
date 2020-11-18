package com.dungdv.api_cinema.Service;

import com.dungdv.api_cinema.Model.NhanXet;
import com.dungdv.api_cinema.Repository.NhanXetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class NhanXetService {
    @Autowired
    private NhanXetRepository nhanXetRepository;

    public void save(NhanXet nhanXet) {
        nhanXetRepository.save(nhanXet);
    }

    public List<NhanXet> nhanXet(Long id) {
        return nhanXetRepository.findByPhimIdOrderByIdDesc(id);
    }

    public NhanXet NhanXetPost(NhanXet nhanXet) {
        LocalDateTime localDateTime = LocalDateTime.now();
        Date ngayCMT = Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());

        nhanXet.setNgayNhanXet(ngayCMT);
        save(nhanXet);
        return nhanXet;
    }
}
