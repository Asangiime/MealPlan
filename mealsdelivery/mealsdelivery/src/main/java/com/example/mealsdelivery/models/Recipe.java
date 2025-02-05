package com.example.mealsdelivery.models;



import lombok.*;

import java.util.Optional;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipe_cards")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Recipe {
    @Id
    private String id;
    private String mealId; // Links to the meal
    private byte[] recipePdf; // Store the PDF file as binary data
    public static Optional<Recipe> map(Object object) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'map'");
    }
}
