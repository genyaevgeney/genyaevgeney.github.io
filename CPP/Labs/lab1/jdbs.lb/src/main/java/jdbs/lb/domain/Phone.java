package jdbs.lb.domain;

public class Phone {
int id;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	String brand;
	
	public Phone(int id, String brand, String model) {
		super();
		this.id = id;
		this.brand = brand;
		this.model = model;
	}

	String model;
	
	public String getBrand() {
		return brand;
	}
	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	public Phone() {}
	
	public String getModel() {
		return model;
	}
	
	public Phone(String brand, String model) {
		this.brand = brand;
		this.model = model;
	}
	
	public void setModel(String model) {
		this.model = model;
	}

	@Override
	public String toString() {
		return "Phone [id=" + id + ", brand=" + brand + ", model=" + model + "]";
	}
}