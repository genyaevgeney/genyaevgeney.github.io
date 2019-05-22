package jdbs.lb;
import java.util.Arrays;

import jdbs.lb.dao.PhoneDao;
import jdbs.lb.domain.Phone;


public class Main {

	public static void main(String[] args) {
		PhoneDao dao = new PhoneDao();
		
		//add 3 products to database
		Arrays.asList(
				new Phone("Nokia", "3200"),
				new Phone("Nokia", "X200"),
				new Phone("Nokia", "1299")
				)
		.stream()
		.forEach(p -> dao.add(p));
		
		//Display all products
		dao.getAll().stream().forEach(System.out::println);
		
		//Update some product
		dao.getAll().stream().findAny().ifPresent(p -> {
			p.setBrand("Dermo");
			dao.update(p);
		});
		
		//Display all products after update
		dao.getAll().stream().forEach(System.out::println);
		
		//Remove some product
		dao.getAll().stream().findAny().ifPresent(p -> {
			dao.remove(p.getId());
		});
		
		//Display all products after remove
		dao.getAll().stream().forEach(System.out::println);
	}

}
