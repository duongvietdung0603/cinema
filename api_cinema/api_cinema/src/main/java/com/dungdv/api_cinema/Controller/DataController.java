package com.dungdv.api_cinema.Controller;


import com.dungdv.api_cinema.Model.Phim;
import com.dungdv.api_cinema.Model.PhongChieu;
import com.dungdv.api_cinema.Service.LichChieuService;
import com.dungdv.api_cinema.Service.PhimService;
import com.dungdv.api_cinema.Service.PhongChieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.annotation.PostConstruct;

@Controller
public class DataController {
    @Autowired
    private PhongChieuService phongChieuService;
    @Autowired
    private LichChieuService lichChieuService;
    @Autowired
    private PhimService phimService;


    @PostConstruct
    public void initData(){

        for (int i = 1 ; i < 5; i++) {
            PhongChieu phongChieu = new PhongChieu("Phòng "+ i);
            phongChieuService.save(phongChieu);
        }

        for (int i = 1 ; i < 5; i++) {
            Phim phim = new Phim("Siêu anh hùng "+ i, 0, "https://thegeekiary.com/wp-content/uploads/2019/09/Birds-of-Prey-Poster.jpg", "đang cập nhật");
            phimService.save(phim);
        }

     }
 }
