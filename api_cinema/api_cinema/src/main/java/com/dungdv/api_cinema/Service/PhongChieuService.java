package com.dungdv.api_cinema.Service;

import com.dungdv.api_cinema.Model.PhongChieu;
import com.dungdv.api_cinema.Repository.PhongChieuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhongChieuService {
    @Autowired
    private PhongChieuRepository phongChieuRepository;


    public void save(PhongChieu phongChieu) {
        phongChieuRepository.save(phongChieu);
    }
}
