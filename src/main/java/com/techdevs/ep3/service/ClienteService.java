package com.techdevs.ep3.service;

import com.techdevs.ep3.entity.Cliente;
import com.techdevs.ep3.repository.ClienteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;

    public List<Cliente> getAll() {return  clienteRepository.findAll();}

    public Cliente save(Cliente cliente) {return  clienteRepository.save(cliente);}

    public void delete (int id) {
    clienteRepository.delete(Objects.requireNonNull(clienteRepository.findById(id).orElse(null)));
    }


}
