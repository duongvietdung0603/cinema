package com.dungdv.api_cinema.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "lich_chieu")
public class LichChieu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private java.util.Date ngayChieu;

    @Temporal(TemporalType.TIME)
    private java.util.Date gioChieu;
    private double giaTien;

    //liên kết 1-1
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "phim_id", nullable = false)
     private Phim phim ;

    //liên kết 1-1
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "phongChieu_id", nullable = false)
     private PhongChieu phongChieu;


    public LichChieu() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getNgayChieu() {
        return ngayChieu;
    }

    public void setNgayChieu(Date ngayChieu) {
        this.ngayChieu = ngayChieu;
    }

    public Date getGioChieu() {
        return gioChieu;
    }

    public void setGioChieu(Date gioChieu) {
        this.gioChieu = gioChieu;
    }

    public double getGiaTien() {
        return giaTien;
    }

    public void setGiaTien(double giaTien) {
        this.giaTien = giaTien;
    }

    public Phim getPhim() {
        return phim;
    }

    public void setPhim(Phim phim) {
        this.phim = phim;
    }

    public PhongChieu getPhongChieu() {
        return phongChieu;
    }

    public void setPhongChieu(PhongChieu phongChieu) {
        this.phongChieu = phongChieu;
    }
}
