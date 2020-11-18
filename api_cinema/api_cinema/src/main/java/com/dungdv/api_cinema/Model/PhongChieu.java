package com.dungdv.api_cinema.Model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "phong_chieu")
public class PhongChieu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "phongChieu", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<LichChieu> lichChieus;

    public PhongChieu() {
    }

    public PhongChieu(String name) {
        this.name = name;
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
}
