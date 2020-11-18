package com.dungdv.api_cinema.Service;

import com.dungdv.api_cinema.Model.DanhGia;
import com.dungdv.api_cinema.Model.Phim;
import com.dungdv.api_cinema.Repository.PhimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PhimService {
    @Autowired
    private PhimRepository phimRepository;
    @Autowired
    private DanhGiaService danhGiaService;

    public void save(Phim phim) {
        phimRepository.save(phim);
    }


    public List<Phim> phim(Integer status, String ngayChieu) {
        List<Phim> phims = new ArrayList<>();

        if(status != 3){
            if(ngayChieu.equals("0")){
                phims = phimRepository.findByStatus(status);
            }else {
                LocalDate localDate = LocalDate.parse(ngayChieu);
                Date date = Date.from(localDate.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
                phims = phimRepository.findByStatusAndLichChieusNgayChieu(status,date);
            }
        }else {
            phims = phimRepository.findAll();
        }

        List<Phim> Phim = phims
                .stream()
                 .distinct()
                .collect(Collectors.toList());
        return Phim;
    }


    public Phim findById(Long idPhim) {
        return phimRepository.findById(idPhim).orElseThrow(()->new IllegalArgumentException("không tìm thấy id phim "+ idPhim));
    }

    public Phim phimById(Long idPhim) {
        return findById(idPhim);
    }

}
