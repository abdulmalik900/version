"use client"
import Image from 'next/image';
import WhatsAppIcon from '../public/Images/whatsapp-icon.png';

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+971526686087'; // Replace with your business phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        style={{ position: 'fixed', bottom: '1rem', right: '1rem', color: '#fff', borderRadius: '50%', padding: '10px', border: 'none', outline: 'none' }}
      >
        <Image
          src={WhatsAppIcon}
          alt="WhatsApp icon"
          width={45}
          height={45}
          style={{ transition: 'transform 0.2s ease-in-out' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
      </button>
    </>
  );
}

export default WhatsAppButton;
