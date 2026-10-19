import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Heart, Send } from 'lucide-react';

export interface RSVPData {
  guestName: string;
  email: string;
  attending: 'attending' | 'declining' | '';
  guestCount: number;
  eventsAttending: string[];
  dietaryPreference: string;
  message: string;
}

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPData>({
    guestName: '',
    email: '',
    attending: 'attending',
    guestCount: 2,
    eventsAttending: ['Mehendi', 'Sangeet', 'Wedding Ceremony', 'Reception'],
    dietaryPreference: 'South Indian Traditional Vegetarian',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RSVPData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RSVPData, string>> = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address for confirmation.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.attending) {
      newErrors.attending = 'Please let us know if you can attend.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate local storage & frontend demonstration
    setTimeout(() => {
      try {
        const storedRsvps = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        storedRsvps.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('wedding_rsvps', JSON.stringify(storedRsvps));
      } catch (err) {
        console.error('LocalStorage save error:', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory golden confetti
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#B88A43', '#D9B875', '#123F35', '#F7F2E8'],
      });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      guestName: '',
      email: '',
      attending: 'attending',
      guestCount: 2,
      eventsAttending: ['Mehendi', 'Sangeet', 'Wedding Ceremony', 'Reception'],
      dietaryPreference: 'South Indian Traditional Vegetarian',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full bg-[#FFF9EF] p-6 sm:p-8 rounded-2xl border border-[#B88A43]/30 shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#B88A43]">
          KINDLY RESPOND
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#123F35] font-normal mt-0.5">
          RSVP
        </h3>
        <p className="text-xs sm:text-sm text-[#756957] font-light mt-1">
          Your presence means the world to us. Let us know if you'll be joining our celebration.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#123F35]/10 text-[#123F35] flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h4 className="font-serif text-2xl text-[#123F35]">
              {formData.attending === 'attending' ? 'Nandri & Welcome!' : 'Thank You for Letting Us Know'}
            </h4>
            <p className="text-xs text-[#756957] mt-1 max-w-sm mx-auto leading-relaxed">
              {formData.attending === 'attending'
                ? `We have recorded your attendance for ${formData.guestCount} guest(s). We look forward to celebrating together in Kochi!`
                : 'We will miss your presence on our special day, but we hold your heartfelt blessings dear.'}
            </p>
          </div>

          {/* Local Demonstration Notice as required by prompt */}
          <div className="p-3 rounded-lg bg-[#F7F2E8] border border-[#B88A43]/20 text-[11px] text-[#756957] max-w-xs mx-auto">
            <span className="font-medium text-[#B88A43]">Demonstration Mode: </span>
            Response saved to local session. Ready for backend API endpoint connection.
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#B88A43] text-xs uppercase tracking-widest text-[#B88A43] hover:bg-[#B88A43] hover:text-[#FFF9EF] transition-colors"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
          {/* Guest Name */}
          <div>
            <label htmlFor="guestName" className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-1">
              Your Full Name *
            </label>
            <input
              id="guestName"
              type="text"
              value={formData.guestName}
              onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
              placeholder="e.g. S. Ramanathan & Family"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F2E8] border text-sm text-[#4A3024] placeholder:text-[#756957]/50 focus:bg-[#FFF9EF] focus:outline-none transition-colors ${
                errors.guestName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#B88A43]/30 focus:border-[#B88A43]'
              }`}
            />
            {errors.guestName && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>{errors.guestName}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. guest@example.com"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F2E8] border text-sm text-[#4A3024] placeholder:text-[#756957]/50 focus:bg-[#FFF9EF] focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#B88A43]/30 focus:border-[#B88A43]'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Attendance Radio */}
          <div>
            <span className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-2">
              Will you be joining us? *
            </span>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors ${
                  formData.attending === 'attending'
                    ? 'bg-[#123F35] text-[#FFF9EF] border-[#123F35]'
                    : 'bg-[#F7F2E8] text-[#4A3024] border-[#B88A43]/30 hover:border-[#B88A43]'
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  value="attending"
                  checked={formData.attending === 'attending'}
                  onChange={() => setFormData({ ...formData, attending: 'attending' })}
                  className="sr-only"
                />
                <Heart size={14} className={formData.attending === 'attending' ? 'text-[#D9B875]' : 'text-[#756957]'} />
                <span className="font-medium">Joyfully Accepts</span>
              </label>

              <label
                className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors ${
                  formData.attending === 'declining'
                    ? 'bg-[#123F35] text-[#FFF9EF] border-[#123F35]'
                    : 'bg-[#F7F2E8] text-[#4A3024] border-[#B88A43]/30 hover:border-[#B88A43]'
                }`}
              >
                <input
                  type="radio"
                  name="attending"
                  value="declining"
                  checked={formData.attending === 'declining'}
                  onChange={() => setFormData({ ...formData, attending: 'declining' })}
                  className="sr-only"
                />
                <span className="font-medium">Regretfully Declines</span>
              </label>
            </div>
          </div>

          {/* Guest Count (if attending) */}
          {formData.attending === 'attending' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-1">
                  Number of Guests
                </label>
                <select
                  id="guestCount"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F2E8] border border-[#B88A43]/30 text-sm text-[#4A3024] focus:outline-none focus:border-[#B88A43]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5 Guests (Family)</option>
                </select>
              </div>

              <div>
                <label htmlFor="diet" className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-1">
                  Dietary Preference
                </label>
                <select
                  id="diet"
                  value={formData.dietaryPreference}
                  onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#F7F2E8] border border-[#B88A43]/30 text-sm text-[#4A3024] focus:outline-none focus:border-[#B88A43]"
                >
                  <option value="Traditional South Indian Sadhya (Vegetarian)">Traditional Vegetarian</option>
                  <option value="Jain Vegetarian">Jain Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="No Restrictions">Standard Menu</option>
                </select>
              </div>
            </div>
          )}

          {/* Optional Message */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider font-medium text-[#4A3024] mb-1">
              Message or Blessings for Couple
            </label>
            <textarea
              id="message"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share a blessing or warm thought..."
              className="w-full px-3.5 py-2 rounded-lg bg-[#F7F2E8] border border-[#B88A43]/30 text-sm text-[#4A3024] placeholder:text-[#756957]/50 focus:bg-[#FFF9EF] focus:outline-none focus:border-[#B88A43] transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-[#B88A43] text-[#FFF9EF] hover:bg-[#9E7333] transition-colors text-xs uppercase tracking-widest font-medium shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-[#B88A43] outline-none"
            >
              <Send size={13} />
              <span>{isSubmitting ? 'Recording RSVP...' : 'Confirm Your Attendance →'}</span>
            </button>
          </div>

          <p className="text-[10px] text-center text-[#756957] font-light">
            Notice: Client-side validation enabled. Responses are saved in your local browser session.
          </p>
        </form>
      )}
    </div>
  );
};
