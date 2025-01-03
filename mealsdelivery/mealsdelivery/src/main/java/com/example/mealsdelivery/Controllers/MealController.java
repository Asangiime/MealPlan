package com.example.mealsdelivery.Controllers;

import com.example.mealsdelivery.Service.MealService;
import com.example.mealsdelivery.models.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meals")
public class MealController {
     @Autowired
    private MealService mealService;

    // Save a meal to the database
    @PostMapping("/save")
    public Meal saveMeal(@RequestBody Meal meal) {
        return mealService.saveMeal(meal);
    }

    @GetMapping("/get")
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();

    }

    @GetMapping("/{id}")
    public String getMealDetails(@PathVariable String id) {
        // Logic to get meal details
        return "Meal details for " + id;
    }
}

