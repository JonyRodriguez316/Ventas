package edu.yavirac.crmbackend.feature.product;


import java.sql.Date;


import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("products")
public class Product {

    @Id
    private Long id;   
    private String name;
    private String description;
    private String brand;
    private String model;
    private String image;
    private Date created;
    private Date update;
    private Boolean enable;

}
