import React from 'react';

const OrchidProcess = () => {
    const steps = [
        {
            title: 'Selection',
            emoji: '🌱',
            description:
                'We begin by selecting healthy orchid varieties suited to different environments and care levels. Each plant is chosen for its vitality and beauty.',
            imageAlt: 'Orchid selection process',
        },
        {
            title: 'Potting & Medium',
            emoji: '🏺',
            description:
                'Orchids are potted in breathable containers with bark, charcoal, or moss. This ensures proper drainage and supports strong root development.',
            imageAlt: 'Potting orchids with bark and moss',
        },
        {
            title: 'Watering & Humidity',
            emoji: '💧',
            description:
                'Watering is tailored to each species. Humidity is controlled to mimic tropical conditions, helping orchids flourish.',
            imageAlt: 'Misting orchids in a greenhouse',
        },
        {
            title: 'Light & Temperature',
            emoji: '🌞',
            description:
                'Orchids thrive in bright, indirect light and stable temperatures. We adjust shading and airflow to maintain ideal growing conditions.',
            imageAlt: 'Orchids under filtered sunlight',
        },
        {
            title: 'Fertilization & Monitoring',
            emoji: '🌿',
            description:
                'We feed orchids with specialized nutrients and monitor them for pests, stress, or deficiencies to ensure optimal health.',
            imageAlt: 'Applying fertilizer to orchids',
        },
        {
            title: 'Blooming & Maintenance',
            emoji: '🌺',
            description:
                'During blooming, orchids receive extra care. Spent flowers are pruned and plants are cleaned to maintain elegance.',
            imageAlt: 'Close-up of blooming orchid',
        },
        {
            title: 'Delivery & Support',
            emoji: '📦',
            description:
                'Each orchid is carefully packaged and delivered in peak condition. We offer care guides and expert support post-purchase.',
            imageAlt: 'Orchid being delivered to customer',
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">🌸 Our Orchid Nurturing Process</h1>
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start gap-6"
                    >
                        {/* Image placeholder */}
                        <div className="w-full md:w-1/3 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 italic">[Image: {step.imageAlt}]</span>
                        </div>

                        {/* Text content */}
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold mb-2">
                                {step.emoji} {step.title}
                            </h2>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrchidProcess;