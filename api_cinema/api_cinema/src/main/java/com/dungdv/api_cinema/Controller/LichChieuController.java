package com.dungdv.api_cinema.Controller;

import com.dungdv.api_cinema.Bean.LichChieuTheoPhim;
import com.dungdv.api_cinema.Model.LichChieu;
import com.dungdv.api_cinema.Model.Phim;
import com.dungdv.api_cinema.Service.LichChieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("api/lich-chieu")
public class LichChieuController {
    @Autowired
    private LichChieuService lichChieuService;


    @GetMapping("")
    public ResponseEntity<List<LichChieu>> lichChieu(){
        return new ResponseEntity<List<LichChieu>>(lichChieuService.lichChieu(), HttpStatus.OK);
    }

    @GetMapping("/phim/{id}")
    public ResponseEntity<List<LichChieuTheoPhim>> lichChieuById(@PathVariable Long id,
        @RequestParam(name = "ngayChieu", required = false, defaultValue = "0") String ngayChieu
    ){
        return new ResponseEntity<List<LichChieuTheoPhim>>(lichChieuService.lichChieuById(id,ngayChieu), HttpStatus.OK);
    }


}
