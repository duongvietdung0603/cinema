package com.dungdv.api_cinema.Service;

import com.dungdv.api_cinema.Model.DanhGia;
import com.dungdv.api_cinema.Model.Phim;
import com.dungdv.api_cinema.Repository.DanhGiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DanhGiaService {
    @Autowired
    private DanhGiaRepository danhGiaRepository;
    @Autowired
    private PhimService phimService;


    public void setDanhGia(Long idPhim){
        List<DanhGia> danhGias1 = findByPhimId(idPhim);
        Phim phim = phimService.findById(idPhim);

        Double soLuongStar = 0.0;

        for (int i = 0; i < danhGias1.size(); i++) {
            soLuongStar = soLuongStar+ danhGias1.get(i).getDanhGia();
        }
        phim.setStar(soLuongStar / danhGias1.size());
        phimService.save(phim);
    }

    private void save(DanhGia danhGia) {
        danhGiaRepository.save(danhGia);
    }

    public List<DanhGia> findByPhimId(Long idPhim) {
        return danhGiaRepository.findByPhimId(idPhim);
    }



    public  DanhGia findByPhimIdAndUserId(Long idPhim,Long idUser) {
        return danhGiaRepository.findByPhimIdAndUserId(idPhim,idUser);
    }

    public DanhGia DanhGiaPost(DanhGia danhGia) {

        List<DanhGia> danhGias = findByPhimId(danhGia.getPhim().getId());

        Boolean check = true;

        for (int i = 0; i < danhGias.size(); i++) {
            if(danhGias.get(i).getUser().getId() == danhGia.getUser().getId()){
                check = false;
            }
        }


        if (check==false){
             DanhGia danhGia1 = findByPhimIdAndUserId(danhGia.getPhim().getId(),danhGia.getUser().getId());
            danhGia1.setDanhGia(danhGia.getDanhGia());
            danhGia.setId(danhGia1.getId());
         }

        save(danhGia);

        setDanhGia(danhGia.getPhim().getId());

        return danhGia;
    }

    public List<DanhGia> DanhGiaByPhim(Long idPhim) {
        return danhGiaRepository.findByPhimId(idPhim);
    }

}
