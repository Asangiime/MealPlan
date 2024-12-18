package com.example.mealsdelivery.Controllers;
import com.melasdelivery.services.CustomerService;
import com.melasdelivery.models.Customer;

@RestController
    @RequestMapping("/customers")
    public class CustomerController{

        @Autowired
            private CustomerService customerService;
        @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

        @GetMapping("/{id}")
            public Optional<Customer> getCustomer(@PathVariable String id){
                return customerService.getCustomerById(id);
            }
        @PutMapping("/{id}") 
            public Customer updateCustomer(@PathVariable String id, @RequestBody Customer customer){
                return customerService.updateCustomer(id, customer);
            }
         @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable String id) {
        customerService.deleteCustomer(id);
        return "Customer with ID " + id + " has been deleted.";
    }
    









    
