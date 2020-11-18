package com.dungdv.api_cinema.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "phim")
public class Phim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String thoiLuong;
    private String quocGiaSX;
    private String namSX;
    private String daoDien;
    private String dienVienChinh;

    private int status; //0 là đang chiếu, 1 là sắp chiếu, 2 là ẩn
    private String trailer;
    private String poster;
    private String banner;

    @Column(name = "noi_dung", columnDefinition = "TEXT NOT NULL", length = 400)
    private String noiDung;
    private double star;


    @OneToMany(mappedBy = "phim", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<LichChieu> lichChieus;


    @OneToMany(mappedBy = "phim", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     private List<NhanXet> nhanXets;

    @OneToMany(mappedBy = "phim", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     private List<DanhGia> danhGia;

    public Phim() {
    }

    public Phim(String name, int status, String poster, String noiDung) {
        this.name = name;
        this.status = status;
        this.poster = poster;
        this.noiDung = noiDung;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getThoiLuong() {
        return thoiLuong;
    }

    public void setThoiLuong(String thoiLuong) {
        this.thoiLuong = thoiLuong;
    }

    public String getQuocGiaSX() {
        return quocGiaSX;
    }

    public void setQuocGiaSX(String quocGiaSX) {
        this.quocGiaSX = quocGiaSX;
    }

    public String getNamSX() {
        return namSX;
    }

    public void setNamSX(String namSX) {
        this.namSX = namSX;
    }

    public String getDaoDien() {
        return daoDien;
    }

    public void setDaoDien(String daoDien) {
        this.daoDien = daoDien;
    }

    public String getDienVienChinh() {
        return dienVienChinh;
    }

    public void setDienVienChinh(String dienVienChinh) {
        this.dienVienChinh = dienVienChinh;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public double getStar() {
        return star;
    }

    public void setStar(double star) {
        this.star = star;
    }

    public List<NhanXet> getNhanXets() {
        return nhanXets;
    }

    public void setNhanXets(List<NhanXet> nhanXets) {
        this.nhanXets = nhanXets;
    }
}
