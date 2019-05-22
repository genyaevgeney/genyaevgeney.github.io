<%@include file="layouts/head.jsp"%>

<h1>Edit</h1>

<form method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" placeholder="Name" name="name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Age" name="age">
  </div>
  <div class="form-group">
  <label class="form-check-label" for="exampleCheck1">Phone Number</label>
    <input type="text" class="form-control" id="exampleCheck1" name="phoneNumber" placeholder="Phone Number">
  </div>
  <br>
  <br>
  <div class="form-group">
  <label class="form-check-label" for="exampleCheck1">Phone Number</label>
    <input type="text" class="form-control" id="exampleCheck1" name="nameid" placeholder="Phone Number">
  </div>
  <button type="submit" class="btn btn-primary">Edit</button>
</form>

<%@include file="layouts/footer.jsp"%>