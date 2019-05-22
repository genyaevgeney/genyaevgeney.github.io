package jdbs.lb.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jdbs.lb.domain.Phone;

public class PhoneDao implements Dao<Phone, Integer> {

private final static String url = "jdbc:h2:mem:phones";
	
	public PhoneDao() {
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "create table if not exists phones("
					+ "id integer primary key auto_increment,"
					+ "brand varchar(300),"
					+ "model varchar(300));";
			Statement statement = conn.createStatement();
			statement.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public List<Phone> getAll() {
		Connection conn = null;
		List<Phone> list = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "select* from phones;";
			Statement statement = conn.createStatement();
			ResultSet rs = statement.executeQuery(sql);
			
			list = new ArrayList<Phone>();
			while(rs.next()) {
				Phone product = new Phone();
				product.setId(rs.getInt(1));
				product.setBrand(rs.getString(2));
				product.setModel(rs.getString(3));
				list.add(product);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}

	public Phone getById(Integer id) {
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "select * from phones where id = ?";
			PreparedStatement preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			ResultSet rs = preparedStatement.executeQuery();
			
			while(rs.next()) {
				Phone product = new Phone();
				product.setId(rs.getInt(1));
				product.setBrand(rs.getString(2));
				product.setModel(rs.getString(3));
				return product;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

	public Phone add(Phone entity) {
		
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "insert into phones(brand, model) values(?,?)";
			PreparedStatement preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setString(1, entity.getBrand());
			preparedStatement.setString(2, entity.getModel());
			preparedStatement.executeUpdate();
			return entity;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

	public void remove(Integer id) {
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "delete from phones where id = ?";
			PreparedStatement preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void update(Phone entity) {
		
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(url);
			String sql = "update phones set brand = ?, model = ? where id = ?";
			PreparedStatement preparedStatement = conn.prepareStatement(sql);
			preparedStatement.setString(1, entity.getBrand());
			preparedStatement.setString(2, entity.getModel());
			preparedStatement.setInt(3, entity.getId());
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
