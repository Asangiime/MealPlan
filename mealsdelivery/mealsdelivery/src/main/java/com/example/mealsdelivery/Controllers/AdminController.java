package main.java.com.example.mealsdelivery.Controllers;

import com.mealdelivery.models.Admin;
import com.mealdelivery.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/register")
    public Admin registerAdmin(@RequestBody Admin admin) {
        return adminService.registerAdmin(admin);
    }

    @GetMapping("/services")
    public String manageServices() {
        return "Admin can handle services here!";
    }
}
