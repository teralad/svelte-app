<script lang="ts">
  import logo from '../../public/img/Decathlon_Logo.svg';
  const logoEncoded = `data:image/svg+xml;base64,${encodeURIComponent(logo)}`;
</script>

<main>
  <img src={logoEncoded} alt="Decathlon Logo" />
</main>
