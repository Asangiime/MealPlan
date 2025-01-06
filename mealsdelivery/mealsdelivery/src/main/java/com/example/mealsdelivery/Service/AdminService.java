//package main.java.com.example.mealsdelivery.Service;
//
//import com.mealdelivery.models.Admin;
//import com.mealdelivery.repositories.AdminRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
////public class AdminService {
//
//    private final AdminRepository adminRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
//        this.adminRepository = adminRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    public Admin registerAdmin(Admin admin) {
//        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
//        admin.setRole("ADMIN");
//        return adminRepository.save(admin);
//    }
//
//    public Optional<Admin> findByUsername(String username) {
//        return adminRepository.findByUsername(username);
//    }
//}
