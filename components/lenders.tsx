'use client';

import { useState } from 'react';
import { Grid3x3, List } from 'lucide-react';
import LenderPlatform from './lender-platform';

export type Platform = {
  name: string;
  category: 'DEFI' | 'CEX' | 'NFT';
  img: string;
  url?: string;
  disabled?: boolean;
};

const platforms: Platform[] = [
  {
    name: 'DEXSCREENER',
    category: 'DEFI',
    img: '/platforms/dexscreener.webp',
    url: 'https://dexscreener.com/solana/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'BIRDEYE',
    category: 'DEFI',
    img: '/platforms/birdeye.webp',
    url: 'https://birdeye.so/solana/token/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'DEXTOOLS',
    category: 'DEFI',
    img: '/platforms/dextools.webp',
    url: 'https://www.dextools.io/app/en/solana/pair-explorer/8Y5stydnMdK2emRgtJpGA5q2y6PqViJK54eB39AMNk8C?t=1765089180335',
    disabled: false,
  },
  {
    name: 'PUMPFUN',
    category: 'DEFI',
    img: '/platforms/pumpfun.webp',
    url: 'https://pump.fun/coin/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'SOLSCAN',
    category: 'DEFI',
    img: '/platforms/solscan.webp',
    url: 'https://solscan.io/token/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'RAYDIUM',
    category: 'DEFI',
    img: '/platforms/raydium.webp',
    url: 'https://raydium.io/swap/?inputMint=sol&outputMint=CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'GECKOTERMINAL',
    category: 'DEFI',
    img: '/platforms/geckoterminal.webp',
    url: 'https://www.geckoterminal.com/solana/pools/8Y5stydnMdK2emRgtJpGA5q2y6PqViJK54eB39AMNk8C',
    disabled: false,
  },
  {
    name: 'COINGECKO',
    category: 'DEFI',
    img: '/platforms/coingecko.webp',
    url: 'https://www.geckoterminal.com/solana/pools/8Y5stydnMdK2emRgtJpGA5q2y6PqViJK54eB39AMNk8C?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults',
    disabled: false,
  },
  {
    name: 'OKX DEX',
    category: 'DEFI',
    img: '/platforms/okxdex.webp',
    url: 'https://web3.okx.com/token/solana/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'GMGN',
    category: 'DEFI',
    img: '/platforms/gmgn.webp',
    url: 'https://gmgn.ai/sol/token/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump',
    disabled: false,
  },
  {
    name: 'COINMARKETCAP',
    category: 'DEFI',
    img: '/platforms/coinmarketcap.webp',
    url: 'https://dex.coinmarketcap.com/token/solana/CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump/',
    disabled: false,
  },
  {
    name: 'MEXC DEX',
    category: 'DEFI',
    img: '/platforms/mexcdex.webp',
    url: 'https://www.mexc.com/dex/trade?pair_ca=8Y5stydnMdK2emRgtJpGA5q2y6PqViJK54eB39AMNk8C&chain_id=100000&token_ca=CUqW6tEUmy5YG3waXxRmLoF2XbKAtjkmb9s6Kkuxpump&from=search',
    disabled: false,
  },
  { name: 'KCEX', category: 'CEX', img: '/platforms/kcex.webp', url: 'https://www.kcex.com/', disabled: true },
  { name: 'BITRUE', category: 'CEX', img: '/platforms/bitrue.webp', url: 'https://www.bitrue.com/', disabled: true },
  { name: 'WEEX', category: 'CEX', img: '/platforms/weex.webp', url: 'https://www.weex.com/', disabled: true },
  { name: 'MEXC', category: 'CEX', img: '/platforms/mexc.webp', url: 'https://www.mexc.com/', disabled: true },
  { name: 'GROVEX', category: 'CEX', img: '/platforms/grovex.webp', url: 'https://www.grovex.io/', disabled: true },
];

export default function CryptoPlatforms() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState<string | null>('DEFI');

  const filteredPlatforms = activeCategory ? platforms.filter((p) => p.category === activeCategory) : platforms;

  return (
    <section id="buy-ceo" className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-2 text-sm font-medium tracking-wide text-black uppercase">
            Discover $CEO Across The Ecosystem
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
            AVAILABLE ON LEADING
            <br />
            CRYPTO PLATFORMS
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
            Easily track, monitor, and access $CEO across trusted Solana-based platforms.
          </p>

          {/* Category Filters & View Toggle */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex gap-3">
              <button
                onClick={() => setActiveCategory(activeCategory === 'DEFI' ? null : 'DEFI')}
                className={`rounded-lg border-2 px-6 py-2 font-semibold transition-all ${
                  activeCategory === 'DEFI'
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-gray-600 bg-transparent text-gray-300 hover:border-gray-400'
                }`}
              >
                DEFI
              </button>
              <button
                onClick={() => setActiveCategory(activeCategory === 'CEX' ? null : 'CEX')}
                className={`rounded-lg border-2 px-6 py-2 font-semibold transition-all ${
                  activeCategory === 'CEX'
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
                    : 'border-gray-600 bg-transparent text-gray-300 hover:border-gray-400'
                }`}
              >
                CEX
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 rounded-lg border border-gray-700 bg-gray-800/50 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded p-2 transition-all ${
                  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-400 hover:text-gray-200'
                }`}
                aria-label="Grid view"
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded p-2 transition-all ${
                  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-400 hover:text-gray-200'
                }`}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Platforms Grid/List */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
              : 'mx-auto flex max-w-3xl flex-col gap-3'
          }
        >
          {filteredPlatforms.map((platform, index) => (
            <LenderPlatform key={index} index={index} viewMode={viewMode} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
