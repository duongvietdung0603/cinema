package com.dungdv.api_cinema.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "nhan_xet")
public class NhanXet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date ngayNhanXet;

    @Column(name = "noi_dung", columnDefinition = "TEXT NOT NULL", length = 400)
    private String noiDung;

    //liên kết 1-1
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "phim_id", nullable = false)
     private Phim phim ;

    //liên kết 1-1
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
     private User user ;


    public NhanXet() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getNgayNhanXet() {
        return ngayNhanXet;
    }

    public void setNgayNhanXet(Date ngayNhanXet) {
        this.ngayNhanXet = ngayNhanXet;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setPhim(Phim phim) {
        this.phim = phim;
    }
}
