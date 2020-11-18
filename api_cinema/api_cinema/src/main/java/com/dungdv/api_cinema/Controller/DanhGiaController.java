package com.dungdv.api_cinema.Controller;


 import com.dungdv.api_cinema.Model.DanhGia;
 import com.dungdv.api_cinema.Service.DanhGiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.*;

 import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("api/danh-gia")
public class DanhGiaController {
    @Autowired
    private DanhGiaService danhGiaService;


    @GetMapping("/phim/{idPhim}")
    public ResponseEntity<List<DanhGia>> DanhGia(@PathVariable Long idPhim){
        return new ResponseEntity<List<DanhGia>>(danhGiaService.DanhGiaByPhim(idPhim), HttpStatus.OK);
    }


    @PostMapping("")
    public ResponseEntity<DanhGia> DanhGiaPost(@RequestBody DanhGia danhGia){
         return new ResponseEntity<>(danhGiaService.DanhGiaPost(danhGia), HttpStatus.OK);
    }
}
