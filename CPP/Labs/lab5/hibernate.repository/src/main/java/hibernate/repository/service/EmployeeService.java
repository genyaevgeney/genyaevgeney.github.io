package hibernate.repository.service;


import java.util.List;

import hibernate.repository.domain;
import hibernate.repository.repository;

public class EmployeeService {

	private EmployeeRepository employeeRepository;

	public EmployeeService() {
		employeeRepository = new EmployeeRepository();
	}

	public List<Employee> getAll(){
		return employeeRepository.getAll();
	}

	public Employee add(Employee entity) {
		return employeeRepository.add(entity);
	}

}

