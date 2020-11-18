package com.dungdv.api_cinema.Service;

import com.dungdv.api_cinema.Bean.LichChieuTheoPhim;
import com.dungdv.api_cinema.Model.LichChieu;
import com.dungdv.api_cinema.Repository.LichChieuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LichChieuService {
    @Autowired
    private LichChieuRepository lichChieuRepository;

    public LichChieu findById(Long id) {
        return lichChieuRepository.findById(id).orElseThrow(()->new IllegalArgumentException("k tìm thấy id phim"));
    }

    public  List<LichChieu>  findByPhimId(Long id) {
        return lichChieuRepository.findByPhimId(id);
    }
    public  List<LichChieu>  findByPhimIdAndNgayChieu(Long id, Date data) {
        return lichChieuRepository.findByPhimIdAndNgayChieu(id,data);
    }

    public List<LichChieu> lichChieu( ) {
         return lichChieuRepository.findAll();
    }

    public List<LichChieuTheoPhim> lichChieuById(Long id, String ngayChieu1) {
        List<LichChieuTheoPhim> lichChieuTheoPhims = new ArrayList<>();

        List<LichChieu> lichChieusLayNgay = findByPhimId(id);

        List<Date> ngayChieu = lichChieusLayNgay
                .stream()
                .map(d -> d.getNgayChieu())
                .distinct()
                .collect(Collectors.toList());

        ngayChieu.forEach((element) -> {
            List<LichChieu> lichChieus =  findByPhimIdAndNgayChieu(id, element);
            List<Date> gioChieu = lichChieus
                    .stream()
                    .map(d->d.getGioChieu())
                    .distinct()
                    .collect(Collectors.toList());

            LichChieuTheoPhim lichChieuTheoPhim = new LichChieuTheoPhim(element, gioChieu);
            lichChieuTheoPhims.add(lichChieuTheoPhim);
        });
        return lichChieuTheoPhims;
    }
}
