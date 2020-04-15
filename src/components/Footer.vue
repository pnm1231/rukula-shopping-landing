<template>
    <footer class="container-fluid text-center mt-5">
        <div class="row">
            <div class="col py-4 small">
                    <ul class="list-unstyled list-inline" id="footer-links">
                        <li class="list-inline-item"><router-link to="/about">About Us</router-link></li>
                        <li class="list-inline-item"><router-link to="/terms">Terms & Conditions</router-link></li>
                        <li class="list-inline-item"><router-link to="/contact">Contact Us</router-link></li>
                    </ul>
                <p></p>
                <p class="mt-4 mb-0">&copy; Rukula Shopping 2020</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

</style>
