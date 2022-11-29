<template>
<hr>
<div class="container">
<div class="label">
    Apartments48
</div>
<div class="social">
  <router-link class="social__icon instagram" to="#">
    <i class="fab fa-instagram"></i>
  </router-link>
  <router-link class="social__icon facebook" to="#">
    <i class="fab fa-facebook-f"></i>
  </router-link>
  <router-link class="social__icon git" to="#">
    <i class="fab fa-github"></i>
  </router-link>
  <router-link class="social__icon twitter" to="#">
    <i class="fab fa-twitter"></i>
  </router-link>
  <router-link class="social__icon linkedin" to="#">
    <i class="fab fa-linkedin-in"></i>
  </router-link>
  
</div>
<div class="adress">Липецк. Шерстобитова 10</div>
</div>
</template>

<script>
    export default {
        name:'SutFooter'
    }
</script>

<style lang="scss" scoped>




hr{
    margin-top: 300px;
    
}


.container{
    display: flex;
	
}
.social {
	width: 100%;
    
	display: flex;
	align-items: center;
	justify-content: center;
}
.social__icon {
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	margin: 10px;
	background-color: #f2f2f2;
	border-radius: 50%;
	box-shadow: 0px 0px 5px #00000080;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
	i {
		font-size: 12px;
		color: #67798e;
		transition: all 0.3s ease;
		z-index: 1;
	}
	&:after {
		content: "";
		width: 20px;
		height: 20px;
		position: absolute;
		transform: translate(0, 70px);
		border-radius: 50%;
		transition: all 0.3s ease;
	}
	&:hover {
		transform: translateY(-4px);
		box-shadow: 0px 0px 15px #00000080;
		i {
			color: #fff;
		}
		&:after {
			transform: translate(0);
		}
	}
}
.instagram {
	&:after {
		background-color: #833AB4;
	}
}
.facebook {
	&:after {
		background-color: #3b5998;
	}
}
.git {
	&:after {
		background-color: #333;
	}
}
.twitter {
	&:after {
		background-color: #00acee;
	}
}
.linkedin {
	&:after {
		background-color: #0e76a8;
	}

}
	@media (max-width: 576px) {
		.label,
		.adress{
			display: none;
		}
}

</style>