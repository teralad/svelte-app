<script lang="ts">
  import logo from '../../static/Decathlon_Logo.svg';
  console.log("logo is ", logo)
  const logoEncoded = `data:image/svg+xml,${encodeURIComponent(logo)}`;
  console.log("logo encoded is ", logoEncoded)
</script>

<main>
  <img src={logoEncoded} alt="Decathlon Logo" />
</main>
