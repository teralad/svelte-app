<script lang="ts">
  import logo from '../../static/Decathlon_Logo.svg';
  const logoEncoded = `data:image/svg+xml,${encodeURIComponent(logo)}`;
</script>

<main>
  <img src={logoEncoded} alt="Decathlon Logo" />
</main>
