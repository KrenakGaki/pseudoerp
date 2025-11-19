import { Package, Users, ShoppingCart, TrendingUp, Settings, FileText } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    console.log('Usuário:', user);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Carregando...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header com boas-vindas e botão de logout */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-600 mt-1">Bem-vindo, {user.name}! 👋</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-semibold"
                    >
                        Sair
                    </button>
                </div>

                {/* Cards de estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Produtos</p>
                                <p className="text-3xl font-bold text-gray-800">150</p>
                            </div>
                            <div className="p-4 bg-purple-100 rounded-lg">
                                <Package className="w-8 h-8 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Clientes</p>
                                <p className="text-3xl font-bold text-gray-800">45</p>
                            </div>
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Vendas</p>
                                <p className="text-3xl font-bold text-gray-800">28</p>
                            </div>
                            <div className="p-4 bg-green-100 rounded-lg">
                                <ShoppingCart className="w-8 h-8 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 font-medium">Receita</p>
                                <p className="text-3xl font-bold text-gray-800">R$ 45.6K</p>
                            </div>
                            <div className="p-4 bg-orange-100 rounded-lg">
                                <TrendingUp className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4"> Acesso Rápido</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Botão Vendas */}
                        <button
                            onClick={() => navigate('/vendas')}
                            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <ShoppingCart className="w-10 h-10 mb-3 mx-auto" />
                            <p className="font-bold text-lg">Vendas</p>
                            <p className="text-sm text-green-100 mt-1">Registrar vendas</p>
                        </button>

                        {/* Botão Produtos */}
                        <button
                            onClick={() => navigate('/produtos')}
                            className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <Package className="w-10 h-10 mb-3 mx-auto" />
                            <p className="font-bold text-lg">Produtos</p>
                            <p className="text-sm text-purple-100 mt-1">Gerenciar produtos</p>
                        </button>

                        {/* Botão Clientes */}
                        <button
                            onClick={() => navigate('/clientes')}
                            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <Users className="w-10 h-10 mb-3 mx-auto" />
                            <p className="font-bold text-lg">Clientes</p>
                            <p className="text-sm text-blue-100 mt-1">Gerenciar clientes</p>
                        </button>

                        {/* Botão Configurações (para configurar depois) */}
                        <button
                            onClick={() => alert('Funcionalidade em desenvolvimento')}
                            className="bg-gradient-to-br from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <Settings className="w-10 h-10 mb-3 mx-auto" />
                            <p className="font-bold text-lg">Configurações</p>
                            <p className="text-sm text-gray-100 mt-1">Em breve</p>
                        </button>

                        {/* Botão Relatórios (para configurar depois) */}
                        <button
                            onClick={() => alert('Funcionalidade em desenvolvimento')}
                            className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <FileText className="w-10 h-10 mb-3 mx-auto" />
                            <p className="font-bold text-lg">Relatórios</p>
                            <p className="text-sm text-indigo-100 mt-1">Em breve</p>
                        </button>
                    </div>
        </div>

                {/* Informações do usuário */}
                <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">📧 Informações da Conta</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">
                            <span className="font-semibold">Nome:</span> {user.name}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span> {user.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;