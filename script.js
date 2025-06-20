<script>
  function fillBookingForm(from, to) {
    document.getElementById('from-input').value = from;
    document.getElementById('to-input').value = to;

    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>
