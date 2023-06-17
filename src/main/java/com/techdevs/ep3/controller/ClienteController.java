package com.techdevs.ep3.controller;

import com.techdevs.ep3.entity.Cliente;
import com.techdevs.ep3.service.ClienteService;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.util.Date;

@AllArgsConstructor
@Controller
@RequestMapping("/cliente")
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping("")
    public String home(Model model) {
        model.addAttribute("clientes", clienteService.getAll());
        return "cliente/index";
    }


    @PostMapping("")
    public String guardar(@ModelAttribute("cliente") Cliente cliente) {
        String result = "redirect:/cliente";
        try {
            cliente.setFechaActualizacion(new Date());
            cliente.setFechaCreacion(new Date());

            clienteService.save(cliente);
        }
        catch (DataIntegrityViolationException ex){
//            String message = "Error de integridad de datos: el valor ya existe en la base de datos.";
//            throw new ClienteCorreoDuplicadoException(message);
            result = "redirect:/cliente?error=duplicate";
        }

        return result;
    }

    @PutMapping("/{id}")
    public String actualizar(@PathVariable("id") int id, @ModelAttribute("cliente") Cliente cliente) {
        String result = "redirect:/cliente";
        try{
            cliente.setId(id);
            cliente.setFechaActualizacion(new Date());
//        cliente.setFechaCreacion(new Date());
            clienteService.save(cliente);

        }
        catch (DataIntegrityViolationException ex){
//            String message = "Error de integridad de datos: el valor ya existe en la base de datos.";
//            throw new ClienteCorreoDuplicadoException(message);
            result = "redirect:/cliente?error=duplicate";
        }

        return result;
    }

    @DeleteMapping("/{id}")
    public String eliminar(@PathVariable("id") int id) {
        clienteService.delete(id);
        return "redirect:/cliente";
    }

}
