package com.example.mealsdelivery.Controllers;

import com.example.mealsdelivery.Service.MealService;
import com.example.mealsdelivery.models.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public Optional<Meal> getMealById(@PathVariable String id){
        return mealService.getMealById(id);
    }

    @PutMapping("/{id}")
    public Meal updateMeal(@PathVariable String id, @RequestBody Meal meal){
        return mealService.updateMeal(id, meal);
    }

    @DeleteMapping("/{id}")
    public String deleteMeal(@PathVariable String id) {
        mealService.deleteMeal(id);
        return "Meal with ID " + id + " has been deleted.";}

    @GetMapping("/available")
    public List<Meal> getAvailableMeals() {
        return mealService.getAvailableMeals();

    }


}

