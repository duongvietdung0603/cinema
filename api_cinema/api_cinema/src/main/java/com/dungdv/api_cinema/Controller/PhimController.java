package com.dungdv.api_cinema.Controller;

import com.dungdv.api_cinema.Model.Phim;
import com.dungdv.api_cinema.Service.PhimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("api/phim")
public class PhimController {
    @Autowired
    private PhimService phimService;

    @GetMapping("")
    public ResponseEntity<List<Phim>> phim(
            @RequestParam(name = "status", required = false, defaultValue = "3") int status,
            @RequestParam(name = "ngayChieu", required = false, defaultValue = "0") String ngayChieu
    ){
        return new ResponseEntity<>(phimService.phim(status,ngayChieu), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Phim> phimId(@PathVariable Long id){
        return new ResponseEntity<>(phimService.phimById(id), HttpStatus.OK);
    }
}
