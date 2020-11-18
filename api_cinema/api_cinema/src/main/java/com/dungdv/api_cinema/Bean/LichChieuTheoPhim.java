package com.dungdv.api_cinema.Bean;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

public class LichChieuTheoPhim {
    private Date ngayChieu;
    private List<Date> gioChieu;

    public LichChieuTheoPhim(Date ngayChieu, List<Date> gioChieu) {
        this.ngayChieu = ngayChieu;
        this.gioChieu = gioChieu;
    }

    public LichChieuTheoPhim() {
    }

    public Date getNgayChieu() {
        return ngayChieu;
    }

    public void setNgayChieu(Date ngayChieu) {
        this.ngayChieu = ngayChieu;
    }

    public List<Date> getGioChieu() {
        return gioChieu;
    }

    public void setGioChieu(List<Date> gioChieu) {
        this.gioChieu = gioChieu;
    }
}
