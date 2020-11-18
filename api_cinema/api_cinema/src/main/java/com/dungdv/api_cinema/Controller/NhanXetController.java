package com.dungdv.api_cinema.Controller;

import com.dungdv.api_cinema.Model.DanhGia;
import com.dungdv.api_cinema.Model.LichChieu;
import com.dungdv.api_cinema.Model.NhanXet;
import com.dungdv.api_cinema.Service.LichChieuService;
import com.dungdv.api_cinema.Service.NhanXetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("api/nhan-xet")
public class NhanXetController {

    @Autowired
    private NhanXetService nhanXetService;


    @GetMapping("phim/{id}")
    public ResponseEntity<List<NhanXet>> nhanXet(@PathVariable Long id){
        return new ResponseEntity<List<NhanXet>>(nhanXetService.nhanXet(id), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<NhanXet> DanhGiaPost(@RequestBody NhanXet nhanXet){
        return new ResponseEntity<>(nhanXetService.NhanXetPost(nhanXet), HttpStatus.OK);
    }
}
