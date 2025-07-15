// BookingsPage.jsx
import { useState, useEffect } from 'react';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* جلب البيانات مرة واحدة عند فتح الصفحة */
  useEffect(() => {
    fetch('/bookings.json')          // عدّل المسار إذا وضعت الملف في مكان آخر
      .then((res) => {
        if (!res.ok) throw new Error('فشل في جلب البيانات');
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  /* تغيير حالة الحجز محلياً (يمكنك إضافة طلب PATCH للـ API) */
  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  /* ألوان الخلفية المخصصة */
  const pageBg = { backgroundColor: '#DED4C6' }; // لون الصفحة
  const cardBg = { backgroundColor: '#E8DED2' }; // لون البطاقة

  /* عرض المحتوى */
  if (loading) return <div className="p-6" style={pageBg}>جارٍ التحميل…</div>;
  if (error)   return <div className="p-6" style={pageBg}>خطأ: {error}</div>;

  return (
    <div className="min-h-screen p-6 space-y-4" style={pageBg}>
      <h1 className="text-2xl font-semibold mb-4">حجوزاتي</h1>

      {bookings.length === 0 && <p>لا توجد حجوزات حالياً.</p>}

      {bookings.map((b) => (
        <div
          key={b.id}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-lg"
          style={cardBg}
        >
          {/* معلومات الحجز */}
          <div className="space-y-1 rtl:text-right">
            <p><span className="font-medium">الحاجز:</span> {b.person}</p>
            <p><span className="font-medium">المكان:</span> {b.item}</p>
            <p>
              <span className="font-medium">التاريخ:</span>{' '}
              {new Date(b.date).toLocaleDateString('ar-EG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* أزرار وشارات الحالة */}
          <div className="flex flex-wrap gap-2 rtl:space-x-reverse">
            {b.status === 'pending' && (
              <>
                <button
                  onClick={() => updateStatus(b.id, 'accepted')}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  قبول
                </button>
                <button
                  onClick={() => updateStatus(b.id, 'rejected')}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  رفض
                </button>
              </>
            )}

            {b.status === 'accepted' && (
              <button
                onClick={() => updateStatus(b.id, 'finished')}
                className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                انتهاء
              </button>
            )}

            {b.status === 'finished' && (
              <span className="px-3 py-1 bg-gray-500 text-white rounded">
                مُنتهٍ
              </span>
            )}

            {b.status === 'rejected' && (
              <span className="px-3 py-1 bg-gray-500 text-white rounded">
                مرفوض
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
