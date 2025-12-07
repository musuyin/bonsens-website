<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>BONSENS Jewelry</h3>
        <p>Premium jewelry manufacturer since 2005</p>
      </div>

      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@bonsens.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      <div class="footer-section">
        <h4>Follow Us</h4>
        <p>Social media links</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} BONSENS Jewelry. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer 组件
</script>

<style scoped>
.site-footer {
  background-color: #333;
  color: white;
  padding: 2rem 0 1rem;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #555;
  width: 100%;
  box-sizing: border-box;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
    gap: 1rem;
  }
}
</style>